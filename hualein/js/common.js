let header = "component/header.html";
let navibar = "component/navi.html";
let footer = "component/footer.html";

const requestHeader = axios.get(header);
const requestNavibar = axios.get(navibar);
const requestFooter = axios.get(footer);

axios.all([requestHeader, requestNavibar, requestFooter]).then(axios.spread((...responses) => {
    $(".container-fluid.header").html(responses[0].data);
    $(".navi-bar").html(responses[1].data);
    $(".container-fluid.footer-sec").html(responses[2].data);

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