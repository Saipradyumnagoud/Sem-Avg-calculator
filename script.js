document.getElementById('calculateBtn').addEventListener('click', function () {
    // Get component marks
    const minor1 = parseFloat(document.getElementById('minor1').value);
    const minor2 = parseFloat(document.getElementById('minor2').value);
    const assignment1 = parseFloat(document.getElementById('assignment1').value);
    const assignment2 = parseFloat(document.getElementById('assignment2').value);
    const cpMarks = parseFloat(document.getElementById('cpMarks').value);
    const crpMarks = parseFloat(document.getElementById('crpMarks').value);

    // Validate marks for components
    if (
        minor1 > 10 || minor2 > 10 || assignment1 > 10 || 
        assignment2 > 10 || cpMarks > 10 || crpMarks > 10
    ) {
        alert('All component marks must be 10 or below. Please check your inputs.');
        return;
    }

    // Calculate average
    const average = ((minor1 + minor2 + assignment1 + assignment2 + cpMarks + crpMarks) / 6).toFixed(2);

    // Get mid marks
    const mid1 = parseFloat(document.getElementById('mid1').value);
    const mid2 = parseFloat(document.getElementById('mid2').value);

    // Calculate highest and lowest percentages
    const highest = Math.max(mid1, mid2);
    const lowest = Math.min(mid1, mid2);
    const highest80 = (0.8 * highest).toFixed(2);
    const lowest20 = (0.2 * lowest).toFixed(2);
    const percentageSum = (parseFloat(highest80) + parseFloat(lowest20)).toFixed(2);

    // Calculate total marks
    const totalMarks = (parseFloat(average) + parseFloat(percentageSum)).toFixed(2);

    // Display results
    document.getElementById('averageResult').innerText = `The average of the six components is: ${average}`;
    document.getElementById('percentageSumResult').innerText = `Mid average  is: ${percentageSum}`;
    document.getElementById('totalMarksResult').innerText = `The total marks: ${totalMarks} / 40`;
});
