const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor(){
    this.tree = null;
  }

  root() {
    return this.tree;
  }

  add(data, node = this.tree) {
    // throw new NotImplementedError('Not implemented');

    if(!node){
      this.tree = new Node(data);
    }
    else {
      if(data<node.data){
        node.left ? this.add(data, node.left) : node.left = new Node(data);
      }
      else if(data>node.data){
        node.right ? this.add(data, node.right) : node.right = new Node(data);
      }
      else {
        this.tree = node;
      }
    }
  }

  has(data) {
    // throw new NotImplementedError('Not implemented');
    return this.find(data) !== null;
  }

  find(data, node = this.tree) {
    // throw new NotImplementedError('Not implemented');

      if(!node){
        return null;
      }

      if(node.data === data){
        return node;
      }

      return data < node.data ?
        this.find(data, node.left) :
        this.find(data, node.right) ;
  }

  remove(data, node=this.tree) {
    if (!(this.find(data) !== null)) return;
    if (!node) {
        return null;
    }
    else {
      if(data < node.data){
        node.left = this.remove(data, node.left);
      }
      else if(data> node.data){
        node.right = this.remove(data, node.right);
      }
      else{
        if (!node.left) {
          return node.right;
        }
        else if(!node.right) {
          return node.left;
        }
        else{
          node.data = this.max(node.left);
          node.left = this.remove(node.data, node.left);
        }
      }
      return node;
    }
  }

  min() {
    // throw new NotImplementedError('Not implemented');
    if(!this.tree){
      return;
    }

    let node = this.tree;
    while(node.left){
      node = node.left;
    }

    return node.data;
  }

  max(max = this.tree) {
    // throw new NotImplementedError('Not implemented');
    if(!max){
      return null;
    }

    let node = max;
    while(node.right){
      node = node.right;
    }

    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};