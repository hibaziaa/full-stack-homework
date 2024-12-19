# Understanding HTML Input Attributes for Validation

## The `pattern` Attribute in `<input type="tel">`

The `pattern` attribute is used to enforce a custom validation pattern for user input based on regular expressions (regex). When used with an input field like `<input type="tel">`, it ensures the phone number entered matches a specific format.

### Example of Using `pattern` with `<input type="tel">`:
If you want to ensure a phone number is entered in the format `123-456-7890`, you can use the following code:

```html
<input type="tel" pattern="\d{3}-\d{3}-\d{4}" title="Phone number must be in the format: 123-456-7890" />
```

- **Pattern Explanation**:
   - `\d{3}`: Matches exactly 3 digits.
   - `-`: Matches the hyphen between number groups.
   - `\d{3}`: Matches another set of 3 digits.
   - `\d{4}`: Matches exactly 4 digits.

This ensures that only phone numbers in the correct format will be accepted, and the `title` attribute provides a helpful message when the user enters an invalid phone number.

---

## Short Guide to Other Input Attributes

### `required` Attribute:
The `required` attribute makes sure that the input field must be filled out before the form can be submitted. It’s a simple way to ensure no necessary data is missed.

```html
<input type="text" required />
```

This will prevent the form from being submitted if the field is left empty.

---

### `maxLength` and `minLength` Attributes:
The `maxLength` and `minLength` attributes allow you to set a limit on the number of characters a user can enter in a field.

- **`minLength`**: Specifies the minimum number of characters required.
- **`maxLength`**: Specifies the maximum number of characters allowed.

```html
<input type="text" minLength="5" maxLength="10" required />
```

- In this example, the user must enter between 5 and 10 characters. The form won't submit if the length of the input is outside this range.

---

### Conclusion:
- The `pattern` attribute uses regular expressions to ensure data matches a specific format.
- The `required` attribute ensures the user fills out a field.
- The `minLength` and `maxLength` attributes enforce limits on the number of characters entered, adding an extra layer of control to form inputs.

By using these attributes, you can create better forms that guide users and help ensure the data you receive is accurate and consistent.

