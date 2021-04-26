<?php
// String to search
$wordStr = "The longest word is somewhere in here";
// returns the word count in $wordStr
$words = str_word_count($wordStr, 1);

// compares the words and returns the word with longest length
function compareWords($a, $b){
  return strlen($b) - strlen($a);
}

// sorts the $words array using the compareWords function
usort($words, 'compareWords');

// prints out the first occurrence of the longest word
echo(array_shift($words));