from dataclasses import dataclass
from typing import Any, Optional

@dataclass
class Node:
  key: int
  value: Any
  left: Optional["Node"] = None
  right: Optional["Node"] = None


@dataclass
class BinarySearchTree:
  root: Optional[Node] = None

  def search(self, key: int) -> Optional[Node]:
    p = self.root
    while True:
      if p is None:
        return None
      elif key == p.key:
        return p
      elif key < p.key:
        p = p.left
      else:
        p = p.right

  def add(self, key: int, value: Any) -> bool:
    def add_node(node: Node, key: int, value: Any) -> bool:
      if key == node.key:
        return False
      elif key < node.key:
        if node.left is None:
          node.left = Node(key, value, None, None)
        else:
          add_node(node.left, key, value)
      else:
        if node.right is None:
          node.right = Node(key, value, None, None)
        else:
          add_node(node.right, key, value)
      return True

    if self.root is None:
      self.root = None(key, value, None, None)
      return True

    return add_node(self.root, key, value)
