# Words Microservice

## Requesting Data
Example of microservice call running on localhost:5000:

http://localhost:5000/words/{"noun":3,"pluralNoun":2,"adjective":1,"verb":3,"participle":3,"adverb":1}

In your app, you can build an object and then stringify/serialize it, such as: 

```
obj = {
  noun: 3,
  pluralNoun: 2,
  adjective: 1,
  verb: 3,
  participle: 3,
  adverb: 1,
};

serializeObj = JSON.stringify(obj)
```

Then, call the microservice: 
localhost:5000/words/serializedObj

## Receiving Data

Response will be in JSON. 

Example of a response: 

```
{
  noun: [ 'howard carter', 'comatulid', 'grand canal' ],
  pluralNoun: [ 'schmos', 'dots' ],
  adjective: [ 'pardonable' ],
  verb: [ 'reevaluate', 'reexamine', 'round up' ],
  participle: [ 'retraveling', 'carolling' ],
  adverb: [ 'ad valorem' ]
}
```

Each field will contain an array of words that were requested. If no words were requested for a particular part of speech, then the array will be empty.
