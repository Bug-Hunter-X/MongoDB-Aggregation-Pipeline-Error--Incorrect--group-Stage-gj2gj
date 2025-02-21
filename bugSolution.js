```javascript
//Corrected aggregation pipeline
aggregate([{
$match: {  "category": "Electronics" }
}, {
$group: { _id: "$category", totalSales: { $sum: $price } }
}])
```