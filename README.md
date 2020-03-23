# skotrum-finalProject

This project is a app called Skötrumskartan that shows on a map where the nearest nursing room are in Stockholm, Göteborg and Malmö.  
When onPress on the marker it shows a callout with name of place, phonenumber and statusinfo if the place has skötrum or a note if they don't. On the Callout there is buttons to show more info, directions and a arrow icon to be able to share the place.

There is bottom navigation that navigate to a CommentPage and to a Info page with more info about the app.

# Technology I used:
This app is created in react native and the map is installed from the react-native-map package. 
I used react stack navigation to naviagte between screens.
And I used react UI material to get the cards on Detail-screen and info-screen. 
I used react native paper cards to show the comments on CommentPage-screen.

The markers data is fetched from a api I created myself in Express Node with mongoose models. This data can be found in my fp-backend repo here: https://github.com/SanSjo/fp-backend

# Next step
Next step is to create a button to zoom in on users location.



