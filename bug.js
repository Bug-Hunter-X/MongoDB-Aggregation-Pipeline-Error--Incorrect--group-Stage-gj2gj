```javascript
//Incorrect aggregation pipeline causing unexpected results
aggregate([{
$match: {  "category": "Electronics" }
}, {
$group: { _id: "$category", totalSales: { $sum: "$price" } }
}])
```