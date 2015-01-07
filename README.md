jQuery-prompt21
===============
A minimalist jQuery prompt plugin for the 21st Century.

...because `prompt()` is ugly and sync.

[![Demo](http://i.imgur.com/Z2Wm9m2.png)](http://jillix.github.io/jQuery-prompt21/)

## Usage
```js
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

## `unflattenObject(flat)`
Converts a flat object to an unflatten one

### Params
- **Object** `flat`: The flat object that should be converted

### Return
- **Object** Unflatten object

## `prompt21(opt_options)`
Initializes a new instance of Prompt21.

Example:

```js
var p21 = $(".container").prompt21();
```

### Params
- **Object** `opt_options`: The options for Prompt21 instance.
 - `cancel` (String): The cancel button jQuery selector (default: `"button.cancel"`).
 - `showEffect` (String): The effect applied to the show function (default: `".fadeIn"`).
 - `hideEffect` (String): The effect applied to the hide function (default: `".fadeOut"`).
 - `form` (String): The form jQuery selector (default: `"form"`).

### Return
- **Prompt21** An object containing:
 - `getData` (Function): The `getData` function. See below.

## `getData(callback)`
Shows the popup and calls the callback function when the OK button is clicked.

### Params
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
