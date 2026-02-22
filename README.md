Question-1: What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer: 1.getElementById is a Unique ID. ID must be unique only one element can have the ID.
2. getElementsByClassName is select by their class name. Multiple slements has a same class name. it will return all of them.
3. querySelector is selected first element that matches CSS selector .just like ID, className, tagName etc.
4. querySelectorAll is selected all element that matches CSS selector.

Question-2: How do you create and insert a new element into the DOM?

Answer: we create a element document.createElement(tagName) and use the methods like appendChild() or append() insert into the DOM. just like that (1.document.createElement("p")  2.p.innerText = "Umayer Ahmad" 3. document.body.appendChild(p));

Question-3: What is Event Bubbling? And how does it work?

Answer: Event Bubbling is a DOM process ,event starts from target element and propagation up to parent element.
when you click the child element, then moves to parent, then moves to grandparent and last of up to document.

Question-4: What is Event Delegation in JavaScript? Why is it useful?

Answer: Event delegation is JavaScript technics event is added parent element listener to handle the all child elements using event bubbling. It's very useful because it is improve performance , efficiency, and add element Dynamically. 