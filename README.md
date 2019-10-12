# localStorage Demo - Memos

A Simple Flask Application that utilizes JavaScript's localStorage to save memos on the Local Browser

`localStorage` allows us to store persistent data on the client-side without any expiration date using vanilla Javascript. The interface is quite simple:

To store an object: 
```
localStorage.setItem("item_name", item_value);
```
To retrieve the object:
```
localStorage.getItem("item_name")
```

`localStorage` can be also indexed using the item_names as keys
```
localStoage["item_name"] = item_value;
```
All the data in `localStorage` is stored in the form of strings. Therefore, if we want to store out Memo logs as Arrays, we first need to convert them into string representation.
We use the JSON `stringify` for this:
```
localStorage.setItem("logs", JSON.stringify(memos))
```
And use the JSON `parse` while retrieving them back
```
memos = JSON.parse(localStorage.getItem("logs"));
```

Note: `localStorage` is hightly inseure and should never be used to store any kind of private data