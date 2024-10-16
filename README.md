# Drawing/Paint Application

## Overview

This drawing application is the second programming project I worked on as part of my Bachelor of Computer Science. It features various creative tools such as a freehand drawing tool, a spray can, confetti effects, a beagle stamp, and an editable shape tool, allowing users to create and customize unique artwork. Built using JavaScript and p5.js, the project explores event handling, user interaction, and graphics manipulation, serving as an introduction to interactive graphics programming.

### Tool Descriptions

- **Rainbow Brush Tool**: Utilizes HSL colour mode to create a vibrant rainbow effect as the user draws. It allows for adjustable brush sizes and resets the hue after completing a full cycle.
  
- **Mirror Draw Tool**: Creates a mirrored effect on the canvas, drawing lines symmetrically across a defined axis. Users can toggle between horizontal and vertical mirroring.

- **Bucket Fill Tool**: Fills areas of the canvas with a selected colour. It employs a non-recursive flood-fill algorithm for efficiency and smoother performance.

- **Freehand Tool**: Draw freely by connecting their mouse movements with lines, creating smooth strokes.

- **Confetti Tool**: Generates a fun, random pattern of differently sized and coloured shapes—ellipses, rectangles, and triangles—around the mouse cursor when pressed, creating a confetti-like effect on the canvas.

- **Editable Shape Tool**: Draw shapes by adding vertices and provides an option to edit the shape by dragging the vertices to new positions before confirming the final shape.

- **Spray Can Tool**: Simulates spray painting by randomly distributing points around the mouse cursor, creating a scattered effect within a defined spread area when the mouse is pressed.

- **Stamp Tool**: Allows you to 'stamp' a beagle head image onto the canvas, with a slider control to adjust the stamp size from 30 to 200 pixels, placing the image at the mouse cursor's position when pressed.

## Code Improvements

While the application functions well, there are several potential improvements that could enhance performance, usability, and maintainability:

1. **Optimize Flood-Fill Algorithm**: The current implementation of the bucket-fill tool could benefit from optimization. An iterative approach with a stack or queue instead of a recursive one to handle larger areas to avoid potential stack overflow errors.

2. **User Interface Enhancements**: The UI can be improved with better styling and layout for tool buttons, sliders, and colour pickers to enhance user experience. Using libraries like Bootstrap or custom CSS could make the interface more appealing.

4. **Responsive Design**: Ensure that the application adapts to different screen sizes and devices. Using CSS flexbox or grid layouts can help create a responsive interface.

5. **Undo/Redo Functionality**: Implementing an undo/redo feature would allow users to revert changes easily, making the tool more user-friendly.

6. **Performance Optimization**: Using techniques such as `requestAnimationFrame` for smoother animations and reduced resource consumption, particularly when dealing with real-time drawing.

7. **Accessibility Features**: Implement features such as keyboard shortcuts for tool selection and colour changes to improve accessibility for all users.

8. **Documentation and Comments**: While the code includes some comments, adding more detailed documentation on each tool's functionality and usage could benefit future developers and users.

## Conclusion

This drawing/paint application provides a fun and creative way for users to express themselves through digital art. With the suggested improvements, it has the potential to become an even more powerful and user-friendly tool for artists and hobbyists alike.
