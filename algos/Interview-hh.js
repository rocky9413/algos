/* Algorithms to know (and also a list of Algorithms to not bother learning!)
for frontend software eng roles
​
Core algos to memorize and practice frequently (implement with whiteboard):
	-binary search of a sorted array (iterative and recursive)
	-insertion sort
	-merge sort
	-inorder/preorder/postorder traversal of binary tree
	-layer traversal of binary tree
	
Stretch goals if you have time to learn/practice:
	-bucketsort (when and why to use it? stretch: how is it related to counting and radix sort?)
	-quicksort (not more difficult to implement than merge sort, but more difficult conceptually. Once it clicks it is much easier)
​
Super stretch:
	-heapsort (heaps should absolutely be learned (see below), but heapsort itself isn't very important)
	-quickselect
​
-----
​
Data structures worth implementing frequently:
	-binary search tree
	(good practice problem: https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/)
​
	-min/max heap
	(figuring out why heaps are badass and when to use them takes a while,
	I recommend thinking hard about these questions: 
		https://www.geeksforgeeks.org/nearly-sorted-algorithm/
		https://leetcode.com/problems/the-skyline-problem/
		(the skyline problem is hard, check out Tushar's video for an intuition for how a heap speeds things up)
	reasonably good video and article for learning what heaps are and how to implement them in JS:
		https://www.youtube.com/watch?v=dM_JHpfFITs
		https://codeburst.io/implementing-a-complete-binary-heap-in-javascript-the-priority-queue-7d85bd256ecf)
​
	-queue
	(don't actually need to bother implementing this as a linked list,
	just be comfortable explaining why you might use a linked list rather than an array
	(dequeueing from an array costs O(n) time because all other elements need to be reindexed,
	whereas dequeuing from a linked list is O(1) because there are only a constant number of reassignments,
	regardless of the size of the queue))
	(bonus: mention that it still might be faster to implement as an array rather than LL thanks to "CPU cache locality".
	Look that up if you're curious, super cool stuff)
​
Stretch:
	-tries (prefix trees, fun data structure, used for autocomplete) 
	-Bloom filter
	-LRU cache (least-recently used eviction policy, rather than FIFO (queue) or LIFO (stack)) 
	(if you can implement this as a Map() with associated doubly linked list (self-made)
	you'll be totally fine for any data structure design questions)
	(this is also just a very common interview question, so it's worth being aware of)
​
-------
Actual interview questions worth memorizing and practicing:
​
Strings and arrays:
-two sum:
	https://leetcode.com/problems/two-sum/
​
-isomorphic strings:
	https://leetcode.com/problems/isomorphic-strings/
​
-buy and sell stocks:
	https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
​
-move zeroes right:
	https://leetcode.com/problems/move-zeroes/
​
-valid parentheses:
	https://leetcode.com/problems/valid-parentheses/
​
-merge intervals:
	https://leetcode.com/problems/merge-intervals/
​
-meeting rooms:
	https://leetcode.com/problems/meeting-rooms/
​
-Dutch national flag:
	https://leetcode.com/problems/sort-colors
​
-most common banned word:
	https://leetcode.com/problems/most-common-word/
​
-spiral matrix:
	https://leetcode.com/problems/spiral-matrix/
​
-range sum query (this is dynamic programming, a topic I recommend skipping (see below), but it comes up in other problems and so is probably worth knowing)
	https://leetcode.com/problems/range-sum-query-immutable/
​
-search in rotated sorted array (common question, tedious problem, same with "find median of two sorted arrays". Maybe just look at these):
	https://leetcode.com/problems/search-in-rotated-sorted-array/
​
​
Backtracking:
-generate permutations:
	https://leetcode.com/problems/permutations/
​
-generate combinations:
	https://leetcode.com/problems/combinations/
​
-generate valid parentheses:
	https://leetcode.com/problems/generate-parentheses/
​
-combination sums:
	https://leetcode.com/problems/combination-sum/
​
​
Trees and recursion:
-convert sorted array to binary search tree of minimum height:
	https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/
​
-determine if a given binary tree is balanced:
	https://leetcode.com/problems/balanced-binary-tree/
​
-lowest common ancestor of two nodes in a binary tree:
	https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/
​
-deep clone JS object
-deep clone graph:
	https://leetcode.com/problems/clone-graph/
​
-deep clone linked list with "random" pointers:
	https://leetcode.com/problems/copy-list-with-random-pointer/
​
​
Sliding window:
-longest substring without repeating characters
	https://leetcode.com/problems/longest-substring-without-repeating-characters/
​
-sliding window maximum
	https://leetcode.com/problems/sliding-window-maximum/submissions/
​
-longest substring with at most k distinct characters
(this is a great problem for understanding how useful heaps are)
	https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/
	
​
graph stuff:
-course schedule
	https://leetcode.com/problems/course-schedule/
​
2D matrix stuff:
(these types of problems are usually very similar and very common in my experience)
-number of islands (a classic, I super recommend being confident with this one)
	https://leetcode.com/problems/number-of-islands/
​
-word search and word search 2 (ws2 is fancy, using a trie to speed up lookup)
	https://leetcode.com/problems/word-search/
	https://leetcode.com/problems/word-search-ii/
​
-longest increasing path in matrix
	https://leetcode.com/problems/longest-increasing-path-in-a-matrix/
​
​
-------
Things probably not worth studying (maybe more common for backend roles or new CS grads):
-Linked list problems (just check out "reverse a linked list")
-Bottom-up dynamic programming (aka tabulation)
	(if you want to learn it anyways, do these problems in order:
	-nth fibonacci number (https://leetcode.com/problems/fibonacci-number/)
	-count stairs (https://leetcode.com/problems/climbing-stairs/)
	-jump game (https://leetcode.com/articles/jump-game/)
	-range sum query (https://leetcode.com/problems/range-sum-query-immutable/)
	-coin change (https://leetcode.com/problems/coin-change/)
	-coin sum (https://leetcode.com/problems/coin-change-2/)
	-equal subset sums (https://leetcode.com/problems/partition-equal-subset-sum/)
	-interleaving strings (https://leetcode.com/problems/interleaving-string/)
	-edit distance (https://leetcode.com/problems/edit-distance/)
-fancy graph algorithms (weighted graphs, pretty much):
	-minimum spanning tree
	-Bellman-Ford
	-Dijkstra's
	-A*
-Self-balancing binary trees (definitely want to know why they are important, but do not need to be able to implement any of them):
	-AVL trees
	-red-black trees
-Knuth-Morris-Pratt string matching (and other state machine stuff)
--------
​
Also, here are my favorite general algo-interviewing resources:
https://jeremyaguilon.me/blog/visualizing_four_key_interview_algorithms
	(learning the sliding window technique is super important and very valuable to feel confident,
	see below for my list of sliding window problems)
​
https://jeremyaguilon.me/blog/ranking_interview_questions_by_cram_score
	(keep in mind that most of the algos in the cram list are overkill for frontend interviews, in my experience)
	(still worth looking at some of the solutions/explanations)
​
https://leetcode.com/explore/
	(leetcode also has an "interview experience" page where people list questions they have gotten recently)
	(https://leetcode.com/discuss/interview-experience/)
​
https://app.codesignal.com/
	(if you don't feel confident with leetcode problems, start by doing the intro arcade questions here)
	(if you get at all stuck (or if it's a regex question), just spend coins (free) to look at the answer for these)
​
https://github.com/gmal1/algoholics-anon
	(repo of simple implementations of most of the stuff below)
​
Tushar Roy - https://www.youtube.com/user/tusharroy2525/videos
​

*/
