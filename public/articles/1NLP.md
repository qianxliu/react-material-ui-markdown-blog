# NLP story and some useless stuff

Although I would like to study on NLP, actually the site construction has consumed my limited time. I will talk about that tomorrow later.

## Introduction for NLP

```python
import spacy
nlp = spacy.load('en')
```

```bash
error: TypeError: 'module' object is not callable

Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
  File "F:\Python\lib\site-packages\spacy\__init__.py", line 30, in load
    return util.load_model(name, **overrides)
  File "F:\Python\lib\site-packages\spacy\util.py", line 175, in load_model
    raise IOError(Errors.E050.format(name=name))
OSError: [E050] Can't find model 'en'. It doesn't seem to be a shortcut link, a Python package or a valid path to a data directory.
```

finish and full code:

```python
import spacy
nlp = spacy.load('en')

doc = nlp("It is a good day, do you think so?")

##Text processing, lemma 词根
print(f"Token \t\tLemma \t\tStopword".format('Token'))
print("-"*40)

##标记化,token标记
for token in doc:
    print(f"{str(token)}\t\t{token.lemma_}\t\t{token.is_stop}")

##next part
from spacy.matcher import PhraseMatcher
matcher = PhraseMatcher(nlp.vocab, attr='LOWER')

##TerminologyList patterns
terms = ['Galaxy Note', 'iPhone 11', 'iPhone XS', 'Google Pixel']
patterns = [nlp(text) for text in terms]
matcher.add("TerminologyList", patterns)

text_doc = nlp("Glowing review overall, and some really interesting side-by-side "
               "photography tests pitting the Iphone 11 Pro against the "
               "Galaxy Note 10 Plus and last year’s iPhone XS and Google Pixel 3.")

matches = matcher(text_doc)
print(matches)

##match_id is the "TerminologyList" ID
for match in matches:
    match_id, start, end = match
    print(nlp.vocab.strings[match_id], text_doc[start:end])
```

## Basic Text Processing with Spacy

> You're a consultant(a person who provides expert advice professionally.) for DelFalco's Italian Restaurant. The owner asked you to identify whether there are any foods on their menu that diners(person who takes food) find disappointing.
Before getting started, run the following cell to set up code checking.

```python
# Load in the data from JSON file
data = pd.read_json('../input/nlp-course/restaurant.json')
data.head()

menu = ["Cheese Steak", "Cheesesteak", "Steak and Cheese", "Italian Combo", "Tiramisu", "Cannoli",
        "Chicken Salad", "Chicken Spinach Salad", "Meatball", "Pizza", "Pizzas", "Spaghetti",
        "Bruchetta", "Eggplant", "Italian Beef", "Purista", "Pasta", "Calzones",  "Calzone",
        "Italian Sausage", "Chicken Cutlet", "Chicken Parm", "Chicken Parmesan", "Gnocchi",
        "Chicken Pesto", "Turkey Sandwich", "Turkey Breast", "Ziti", "Portobello", "Reuben",
        "Mozzarella Caprese",  "Corned Beef", "Garlic Bread", "Pastrami", "Roast Beef",
        "Tuna Salad", "Lasagna", "Artichoke Salad", "Fettuccini Alfredo", "Chicken Parmigiana",
        "Grilled Veggie", "Grilled Veggies", "Grilled Vegetable", "Mac and Cheese", "Macaroni",  
         "Prosciutto", "Salami"]

import spacy
from spacy.matcher import PhraseMatcher

index_of_review_to_test_on = 14
# primarily integer location(iloc)
text_to_test_on = data.text.iloc[index_of_review_to_test_on]

# Load the SpaCy model
nlp = spacy.blank('en')

# Create the tokenized version of text_to_test_on 标记化
review_doc = nlp(text_to_test_on)

# Create the PhraseMatcher object. The tokenizer is the first argument. Use attr = 'LOWER' to make consistent capitalization
matcher = PhraseMatcher(nlp.vocab, attr='LOWER')

# Create a list of tokens for each item in the menu
menu_tokens_list = [nlp(item) for item in menu]

# Add the item patterns to the matcher
# Look at https://spacy.io/api/phrasematcher#add in the docs for help with this step
# Then uncomment the lines below

matcher.add("MENU",            # Just a name for the set of rules we're matching to
            menu_tokens_list  
           )

# Find matches in the review_doc
matches = matcher(review_doc)

```

it ends currently.
