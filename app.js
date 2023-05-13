class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }

}


class Tree{
    constructor(){
        this.root = Math.floor(arr.length / 2);
    }

    buildTree(arr){
        arr = removeDuplicates(arr)
        arr = sortArray(arr)
        console.log("Hello")
        console.log(arr)

        return arr

        if(arr.length <= 1){
            return arr
        }else{
            let middle = Math.floor(arr.length / 2)
            arr = arr.slice(0, middle)
            buildTree(arr)
        }

        return this.root
    }
}

function sortArray(arr){

    return arr
}

function removeDuplicates(arr){
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if(arr[i] === arr[j]){
                arr.splice(i, 1)
                removeDuplicates(arr)
            }
        }
    }
    return arr
}


let tree = new Tree(arr)

tree.buildTree(arr)

// Build a Tree class / factory 
// which accepts an array when initialized. 
// The Tree class should have a root attribute which uses 
// the return value of buildTree which you’ll write next.

// Write a buildTree function which 
// takes an array of data (e.g. [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]) 
// and turns it into a balanced binary tree full of Node objects appropriately placed 
// (don’t forget to sort and remove duplicates!). 
// The buildTree function should return the level-0 root node.


const prettyPrint = (node, prefix = '', isLeft = true) => {
    if (node === null) {
       return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
}


