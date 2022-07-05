Example 1:

Problem:

- transform creates its own boundaries which is consider as a root element for fix position of children

Solutions:

- always put modals in main level of the page

Example 2:

Problem:

- transform creates its own boundaries which is consider as a root background for children

Solutions:

- use mix-blend mode on the same element that has transform property

Example 3:

Problem:

- z-index is ignored because of transformed container new context

Solution:

- use z-indexes positioning within elements on the same DOM level
- use transform as a feature to isolate elements from upper level z-index positioned elements

Example 4:

Problem:

- white space add extra empty space to the icon, so the container height is not equal to icon height

Solution:

- build your project with minified files version
- use flexbox

Example 5:

Problem:

- displaying elements with inline-block contains white spaces

Solution:

- build your project with minified files version
- use flexbox
- use float on elements
