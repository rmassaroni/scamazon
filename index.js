const playwright = require('playwright');
async function main() {
    const browser = await playwright.chromium.launch({
        headless: false
    });
    const page = await browser.newPage();
    await page.goto('https://www.amazon.com/gp/goldbox/?_encoding=UTF8&_encoding=UTF8&ref_=dlx_gate_sd_dcl_vai_dt_pd_gw_unk&pd_rd_w=CFRbL&content-id=amzn1.sym.26a365d6-3002-449e-bfff-1848c98a3efd&pf_rd_p=26a365d6-3002-449e-bfff-1848c98a3efd&pf_rd_r=H9YY7NJ9T2Y1WE233XB3&pd_rd_wg=wvJ1b&pd_rd_r=404d67c0-4ae3-4bc3-ae98-1ab59543f3a7');
    const deals = await page.$$eval(".DealContent-module__truncate_sWbxETx42ZPStTc9jwySW", listElms => {
        const data = [];
        //const listElms = titleElm.getElementsByTagName('li');
        listElms.forEach(elm => {
            data.push(elm.innerText.split('\n'));
        });
        return data;
    });
    console.log('Deals: ', deals);
    await page.waitForTimeout(5000);
    await browser.close();
    console.log("Success");
}
main();
