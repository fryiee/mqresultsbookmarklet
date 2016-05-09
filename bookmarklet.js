var c = 0, total = 0, grade = 0;
$("span[id$='lblMark']").each(function() {
    c++;
    total += parseInt($(this).text());
});

$("table[id$='grdResultDetails'] tbody tr").each(function() {
    var m = $(this).find('td:eq(5)').text();
    if (m == "F") {
        grade += 0;
    } else if (m == "PC") {
        grade += 1;
    } else if (m == "P") {
        grade += 2;
    } else if (m == "CR") {
        grade += 3;
    } else {
        grade += 4;
    }
});
alert("Your Weighted Average Mark is " + (total / c).toFixed(2));
alert("Your GPA is " + (grade / c).toFixed(2));