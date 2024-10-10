let header = "component/header.html";
let footer = "component/footer.html";

const requestHeader = axios.get(header);
const requestFooter = axios.get(footer);

axios.all([requestHeader, requestFooter]).then(axios.spread((...responses) => {
    $(".container-fluid.header").html(responses[0].data);
    $(".container-fluid.footer-sec").html(responses[1].data);

    // 導覽列
    $('.mb-navi-btn').click(function() {
        $('.mb-navi-btn').toggleClass('active');
        $('.navi-bar').toggleClass('active');
    });

    // 導覽列子項目
    $('.navi-list.dropdown').click(function() {
        $('.navi-list.dropdown').removeClass('active');
        $(this).addClass('active');
    });

})).catch(errors => {
    console.error('Loading components failed...');
});