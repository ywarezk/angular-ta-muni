# Advanced Forms

## How angular wants us to look at forms?

FormControl, FormArray, FormGroup

### Login form

FormGroup
  - FormControl - email
  - FormControl - password
  
### Register Form

FormGroup
  FormControl - email
  FormGroup
    - FormControl - password
	- FormControl - repeat
	
### Phone number form

FormGroup
  FormArray
    - FormGroup
	  - FormControl - prefix
	  - FormControl - number
	- FormGroup
	  - FormControl - prefix
	  - FormControl - number
	  
## Angular provides us two toolsets to deal with forms
  - Template driven
  - Reactive
  
## Template driven

FormGroup - NgForm
  FormControl - NgModel
  FormControl
	
## Reactive

FromGroup