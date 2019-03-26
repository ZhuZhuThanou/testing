'use strict';

const chromium = require('chrome-aws-lambda');
const puppeteer = require('puppeteer-core');

const SEARCH_INPUT_SELECTOR = '#search_form_input_homepage';
const ENTER_KEY = String.fromCharCode(13);
module.exports.tesuto = async (event, context) => {

  let result = null;
  let browser = null;

  try {
    browser = await puppeteer.launch({
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
      executablePath: await chromium.executablePath,
      headless: chromium.headless,
    });
 
    let page = await browser.newPage();
 
    await page.goto(event.url || 'https://duckduckgo.com');
    
    
    await page.click(SEARCH_INPUT_SELECTOR);
    await page.keyboard.type('JavaScript');
    await page.keyboard.type(ENTER_KEY);
    await page.waitForNavigation({ waitUntil: 'networkidle0' });
    
    result = await page.title();

  } catch (error) {
    return context.fail(error);
  } finally {
    if (browser !== null) {
      await browser.close();
    }
  }
  return context.succeed(result);
};
