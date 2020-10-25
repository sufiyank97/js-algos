function CompareLists(llist1, llist2) {
  // checks for null head
  if (!llist1 || !llist2) {

    // if both null, the lists are the same length
    return llist1 === llist2 ? 1 : 0;
  }

  // if the data is the same, compare next node
  return llist1.data === llist2.data ? CompareLists(llist1.next, llist2.next) : 0;
}