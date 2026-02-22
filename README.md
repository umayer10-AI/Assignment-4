Question-1: What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans: 1.getElementById is a Unique ID. ID must be unique only one element can have the ID.
2. getElementsByClassName is select by their class name. Multiple slements has a same class name. it will return all of them.
3. querySelector is selected first element that matches CSS selector .just like ID, className, tagName etc.
4. querySelectorAll is selected all element that matches CSS selector.

Question-2: How do you create and insert a new element into the DOM?

ans: we create a element document.createElement(tagName) and use the methods like appendChild() or append() insert into the DOM. just like that (1.document.createElement("p") 2.p.innerText = "Umayer Ahmad" 3. document.body.appendChild(p));

Question-3: 