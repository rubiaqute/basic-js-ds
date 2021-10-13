const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
// function removeTo(parent, child){
//   if (parent.data == child) {
//     if (new Node(child).left==null&& (new Node(child).right)==null) parent.data=null;
//     if (new Node(child).right!=null)
//   }
// }
function removeTo(parent, child){
  if (parent==null) return null;
  else{
  if (child< parent.data){
    parent.left = removeTo(parent.left, child);
    return parent;
  } 
  if (child >parent.data){
parent.right=removeTo(parent.right, child);
return parent;
   
  }
  if (child == parent.data){
    if (parent.left==null&&parent.right==null){
      return null;
    }
    if (parent.left==null){
      parent=parent.right;
      return parent;
    }
    if (parent.right==null){
      parent = parent.left
      return parent;
    }
    if (parent.right!=null&&parent.left!=null){
      let minFromRight = parent.right;
      while(minFromRight.left!=null){
        minFromRight = minFromRight.left;
      }
      parent.data=minFromRight.data;
      parent.right = removeTo(parent.right,minFromRight.data)
      return parent;
    }
    }
  }
}

function hasTo(parent, child){
    
  if (child < parent.data){
    if(parent.left==null) return false;
    else return hasTo(parent.left, child) 
  } else  if (child > parent.data){
    
    if(parent.right==null) return false;
    else return hasTo(parent.right, child);
    }  else return true;
    
  }

function addTo(parent, child)  {
      if (parent==null) return new Node(child);
      if (parent.data ==child) return parent;
      if (child < parent.data){
          parent.left =  addTo(parent.left, child); 
      } 
      if (child > parent.data){
      parent.right= addTo(parent.right, child);
        }
  return parent;
}
function minTo(parent){
  if (parent.left==null) return parent.data;
  else return minTo(parent.left);
}
function maxTo(parent){
  if (parent.right==null) return parent.data;
  else return maxTo(parent.right);
}
module.exports = class BinarySearchTree {
  constructor() {
    this.treeHead = null; 
  }


  root() {
    
    if (this.treeHead==null) return null;
    
    else return this.treeHead;
  }

  add(data) {
  this.treeHead =addTo(this.treeHead, data);
    
  }
  
  has(data) {
    
    if (data==null) return true;
      else return hasTo(this.treeHead, data);
  }

  
  
  find(data) {
    if (this.has(data) ==true) return new Node(data);
    else return null;
  }

  remove(data) {
    this.treeHead = removeTo(this.treeHead, data);
  }

  min() {
    if (this.treeHead==null) return null;
    else return (minTo(this.treeHead));

  }

  max() {
    if (this.treeHead==null) return null;
    else return (maxTo(this.treeHead));
  }

}