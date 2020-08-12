# Angular change detection

- Identify that something happened ? need to identify async things
- recalculate the dynamic values in the template
- if there is a change i need to update the dom

## for what things should angular trigger change detection?

- Observable / Promise
- Events
- Timer

any async thing that will happen will trigger change detection.

## Automatic change detection

angular will trigger change detection automatically by identifying async stuff from within angular

