#!/bin/bash


for file in *; do

	echo "---------------"
	echo $file
	echo "--"
	echo "Contents:"
	echo "* $(ls $file)"

done