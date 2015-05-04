jQuery-prompt21
===============
A minimalist jQuery prompt plugin for the 21st Century.

...because `prompt()` is ugly and sync.

[![Demo](http://i.imgur.com/NzKOKVX.png)](http://jillix.github.io/jQuery-prompt21/)

## Usage
```js
<button class="btn btn-info show-popup">Prompt Popup</button>
<pre class="result">Click the "Prompt Popup" button.</pre>
<div class="popup">
    <form class="form-horizontal">
        <fieldset>

        <!-- Form Name -->
        <legend>Prompt21 Form</legend>

        <!-- Text input-->
        <div class="form-group">
          <label class="col-md-4 control-label" for="name.first">First name</label>
          <div class="col-md-6">
          <input id="name.first" name="name.first" type="text" placeholder="" class="form-control input-md" required="" value="Johnny">
          <span class="help-block">Your first name.</span>
          </div>
        </div>

        <!-- Text input-->
        <div class="form-group">
          <label class="col-md-4 control-label" for="name.last">Last name</label>
          <div class="col-md-6">
          <input id="name.last" name="name.last" type="text" placeholder="" class="form-control input-md" value="B.">
          <span class="help-block">Your last name.</span>
          </div>
        </div>

        <!-- Textarea -->
        <div class="form-group">
          <label class="col-md-4 control-label" for="story">Your story</label>
          <div class="col-md-6">
            <textarea class="form-control" id="story" name="story">I'm one of the @jillix developers.</textarea>
          </div>
        </div>

        <!-- Button (Double) -->
        <div class="form-group">
          <label class="col-md-4 control-label" for="cancel"></label>
          <div class="col-md-6">
            <button type="button" id="cancel" class="btn btn-default cancel">Cancel</button>
            <button type="submit" id="save" class="btn btn-success submit">OK</button>
          </div>
        </div>

        </fieldset>
    </form>
</div>
<script src="path/to/jquery.js"></script>
<script src="path/to/jQuery-prompt21.js"></script>
<script>
    var p = $(".popup").prompt21();
    $(".show-popup").on("click", function () {
        p.getData(function (err, data) {
            $(".result").text(JSON.stringify(data, null, 2));
        });
    });
</script>
```

## Documentation

### `unflattenObject(flat)`
Converts a flat object to an unflatten one

#### Params
- **Object** `flat`: The flat object that should be converted

#### Return
- **Object** Unflatten object

### `prompt21(opt_options)`
Initializes a new instance of Prompt21.

Example:

```js
var p21 = $(".container").prompt21();
```

#### Params
- **Object** `opt_options`: The options for Prompt21 instance.
 - `cancel` (String): The cancel button jQuery selector (default: `"button.cancel"`).
 - `showFunc` (String): The jQuery function called to show the form (default: `"fadeIn"`).
 - `hideFunc` (String): The jQuery function called to hide the form (default: `"fadeOut"`).
 - `form` (String): The form jQuery selector (default: `"form"`).

#### Return
- **Prompt21** An object containing:
 - `getData` (Function): The `getData` function. See below.

### `getData(callback)`
Shows the popup and calls the callback function when the OK button is clicked.

#### Params
- **Function** `callback`: The callback function.

## How to contribute

1. File an issue in the repository, using the bug tracker, describing the
   contribution you'd like to make. This will help us to get you started on the
   right foot.
2. Fork the project in your account and create a new branch:
   `your-great-feature`.
3. Commit your changes in that branch.
4. Open a pull request, and reference the initial issue in the pull request
   message.

## License
See the [LICENSE](./LICENSE) file.
