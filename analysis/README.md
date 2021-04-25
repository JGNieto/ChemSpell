# Analysing you language

With the code I built, you can see how many words in your language can be spelled using the Periodic Table. For that follow the following steps:

 1. Clone the repository
 2. Download a frequency list of the desired language (the more words the better)
 3. Write some code to make your list an array stored in a JSON document. Each element of the array is itself an array with two elements. The first element is a string with the word and the second the frequency of the word as an integer. If you do not care about frequencies and just want the number of words that can be spelled with the Periodic Table, just write any number since the analysis is given separately for the weighed and not-weighed count. You can see examples in this repo, such as [this one](corpus/en/en.json).
 4. Modify the index.js document at the top to point to your file and run it.

If you have any questions, send me an [email](mailto:javier@beren.dev)
