$(() => {
    $('button[#data-value]') .on('click', function() {
        const value = $(this).data('value')
        const result = $('#result').val();

        $('#result').val(currentResult === '0' ? value : currentResult + value);
    });

});
