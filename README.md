# alt_basic-modal

`alt_basic-modal` is a simple, lightweight modal library for React applications. It is designed to be easy to use and highly customizable.

## Installation

You can install `alt_basic-modal` using npm:

```
npm install alt_basic-modal
```

# Usage

To use `alt_basic-modal` in your React application, you can import it and use it as a component.

```javascript
import Modal from "alt_basic-modal";

// In your component
<Modal isOpen={this.state.isModalOpen} onClose={this.closeModal}>
  <h1>Your Content Here</h1>
</Modal>;
```

# Customizing styles

`alt_basic-modal` uses `styled-components` for styling, which allows you to easily customize the styles of the modal components.

The modal consists of three main styled components: `ModalWrapper`, `ModalContent`, and `CloseButton`. You can extend these components to customize their styles.

Here's an example of how you can extend the `ModalWrapper` to change its background color:

```javascript
const CustomModalWrapper = styled(ModalContent)`
  background-color: #yourColor;
`;

// Then use CustomModalWrapper in your component
```

Similarly, you can extend `ModalWrapper` and `CloseButton` to customize their styles.

# Dependencies

`alt_basic-modal` has the following dependencies:

[React](https://react.dev/): Facebook open-source Javascript library.

[Styled-components](https://styled-components.com/): A library that allows you to write CSS in JS while building custom components in React.

[Vite](https://vitejs.dev/): Vite is a frontend tool that is used for building fast and optimized web applications.

Please ensure these dependencies are installed in your project.

# Contributing

Contributions are welcome. Please submit a pull request with any enhancements.

# License

`alt_basic-modal` is licensed under the ISC license.
