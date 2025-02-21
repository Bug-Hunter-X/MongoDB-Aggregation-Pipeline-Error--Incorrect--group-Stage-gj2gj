# MongoDB Aggregation Pipeline Bug
This repository demonstrates a common error in MongoDB aggregation pipelines: incorrect use of the `$group` stage, leading to inaccurate results.

## Bug Description
The provided code attempts to calculate total sales for the 'Electronics' category using an aggregation pipeline. However, it incorrectly uses `"$price"` within the `$sum` operator.  This causes incorrect sales totals. 

## Bug Solution
The solution corrects the `$sum` operator to correctly reference the `price` field using `$price` instead of `"$price"`, resulting in the accurate calculation of total sales for the 'Electronics' category.