const parent = document.querySelector('.parent-week');
    console.log(parent);
    const childrens = parent.children;

    for(let i=0; i<childrens.length; i++){
        console.log(childrens[i].innerHTML);
    }

    const arr = ["red","blue","green","yellow","orange","cyan"]

    for (let i = 0; i < parent.children.length; i++) {
        const colorIndex = (Math.floor(Math.random() * arr.length))
        const color = arr[colorIndex];
        parent.children[i].style.color = color;
    }

    // console.log(parent.firstElementChild);
    // console.log(parent.lastElementChild);

    // const childOne = parent.firstElementChild;
    const childOne = document.querySelector('.day');
    // console.log(childOne);

    // Query Selector is an expensive operation 
    
    // To select first element having class as day, independent thread is executed and complete tree from window -> document -> html -> body -> div -> div -> attribute

    // 1. Parsing the Selector

    // 2. Traversal of the DOM Tree

    // 3. Matching Elements

    // 4. Performance Optimizations
        // -> Indexing
        // -> Short-Circuiting
    
    // 5. Returning the Result

    // Link to read in detail : https://chatgpt.com/share/9558cf21-caf1-40cb-9985-4e60156f12f7

    // console.log(childOne.parentElement);
    console.log(childOne.nextElementSibling);

    console.log("Nodes : ",parent.childNodes);
    // Reason why it returned 15 in detail 
    // Link : https://chatgpt.com/share/9558cf21-caf1-40cb-9985-4e60156f12f7
