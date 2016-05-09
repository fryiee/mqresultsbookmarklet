#Macquarie University Results Bookmarklet

This is a simple bookmarklet for calculating your Grade Point Average (GPA) and Weighted Average Mark (WAM) from the Macquarie University Students page. I created this (very) simple bookmarklet because MQ only has a manual GPA calculator (located in a non-trivial location to find) and no WAM calculator. The bookmarklet outputs two alerts, one for GPA and one for WAM. This is of course, editable (just grab the source!)

For a direct bookmarklet link, use this!
(javascript:(function()%7Bvar%20c%20%3D%200%2C%20total%20%3D%200%2C%20grade%20%3D%200%3B%24(%22span%5Bid%24%3D'lblMark'%5D%22).each(function()%20%7Bc%2B%2B%3Btotal%20%2B%3D%20parseInt(%24(this).text())%3B%7D)%3B%24(%22table%5Bid%24%3D'grdResultDetails'%5D%20tbody%20tr%22).each(function()%20%7Bvar%20m%20%3D%20%24(this).find('td%3Aeq(5)').text()%3Bif%20(m%20%3D%3D%20%22F%22)%20%7Bgrade%20%2B%3D%200%3B%7D%20else%20if%20(m%20%3D%3D%20%22PC%22)%20%7Bgrade%20%2B%3D%201%3B%7D%20else%20if%20(m%20%3D%3D%20%22P%22)%20%7Bgrade%20%2B%3D%202%3B%7D%20else%20if%20(m%20%3D%3D%20%22CR%22)%20%7Bgrade%20%2B%3D%203%3B%7D%20else%20%7Bgrade%20%2B%3D%204%3B%7D%7D)%3Balert(%22Your%20Weighted%20Average%20Mark%20is%20%22%2B%20(total%20%2F%20c).toFixed(2))%3Balert(%22Your%20GPA%20is%20%22%2B%20(grade%20%2F%20c).toFixed(2))%7D)())