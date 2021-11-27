import test from './test';
import linkArticleList from './../templates/link-article-list/script.js';
import benefitsList from './../templates/benefits/script.js';
import reviewsList from './../templates/reviews/script.js';

test();

$(document).ready(function () {
    linkArticleList();
    benefitsList();
    reviewsList();
});