class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class Tree{
    constructor(){
        this.root = null;
    }

    buildTree(arr){
        arr = removeDuplicates(arr);
        arr = sortArray(arr);
    
        this.root = this.buildTreeRecursive(arr, 0, arr.length - 1);
        return this.root;
      }
    
    buildTreeRecursive(arr, start, end) {
        if (start > end) {
            return null;
        }

        let middle = Math.floor((start + end) / 2);
        let node = new Node(arr[middle]);

        node.left = this.buildTreeRecursive(arr, start, middle - 1);
        node.right = this.buildTreeRecursive(arr, middle + 1, end);

        return node;
    }

    printTree(node, prefix = '', isLeft = true){
        // console.log(node)
        if (node === null) {
           return;
        }
        // console.log(node.right)
        if (node.right !== null) {
            // console.log("Hello?")
            this.printTree(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
        }
        console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
        if (node.left !== null) {
            this.printTree(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
        }
    }

    insert(node, num){
        if (num === node.data) {
            console.log("Number already in tree")
            return "Number already in tree";
        }
        if (num < node.data) {
            if (node.left !== null) {
                this.insert(node.left, num)
            }else{
                let newNode = new Node(num);
                node.left = newNode;
            }
        }

        if (num > node.data) {
            if (node.right !== null) {
                this.insert(node.right, num)
            }else{
                let newNode = new Node(num);
                node.right = newNode;
            }
        }
    }
}


function sortArray(arr){
    var n = arr.length;
  
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          var tmp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = tmp;
        }
      }
    }
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

arr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]


let tree = new Tree()
let root = tree.buildTree(arr)
tree.printTree(root);
tree.insert(root, 33);
tree.printTree(root);



