# Yo-kai Watch api

This was created during my time as a student at Code Chrysalis

![Yokai Watch](./img/yokai.jpg)

## What is this?

This is a full RESTful API linked to a database detailing everything about the Yo-kai main game series characters.

## How to use this?

### To view all the yo-kai
```
GET localhost:5000/api/all
```

### To search by id
```
GET localhost:5000/api/?id= + yakai-id
```

### To search by name
```
GET localhost:5000/api/?name= + yokai-name
```

### To search by class
```
GET localhost:5000/api/?class= + yokai-class
```

### To search by rank
```
GET localhost:5000/api/?rank= + yokai-rank
```

### To search by element
```
GET localhost:5000/api/?element= + yokai-element
```

### To search by favorite food
```
GET localhost:5000/api/?favoriteFood= + yokai-favorite-food
```

### To add a yokai
you have to add a JSON object with the following format
    {
        "name": "",
        "class": "",
        "rank": "",
        "element": "",
        "favoriteFood": "",
        "evolution": ""
    }
```
POST localhost:5000/api/
```

### To update a yokai
```
PUT localhost:5000/api/?yokai-key= + yokai-value
```
```
example1 localhost:5000/api/?name=Undy
```
```
example2 localhost:5000/api/?id=5
```

### To delete a yokai
```
DELETE localhost:5000/api/?yokai-key= + yokai-value
```
```
example1 localhost:5000/api/?rank=E
```
```
example2 localhost:5000/api/?element=Fire
```
