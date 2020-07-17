import { h } from 'snabbdom/build/package/h';
import { init } from 'snabbdom/build/package/init';
import { eventListenersModule } from 'snabbdom/build/package/modules/eventlisteners';
import { classModule } from 'snabbdom/build/package/modules/class';

// 数据
const data = {
  sortPoint: ['Rank', 'Title', 'Description'],
  list: [
    {Rank: 1, Title: 'the god', Description: 'descriptiondescriptiondondescridescriptiondescriptiondescri'},
    {Rank: 2, Title: '12 angry',  Description: 'aescriptescriptiondescridescriptiondescriptiondescri'},
    {Rank: 3, Title: 'fight club',  Description: 'fdescriptionondescriptiondescriptiondescridescriptiondescriptiondescri'},
    {Rank: 4, Title: 'hhh club',  Description: '5descondescriptiondescridescriptiondescriptiondescri'},
  ]
}

// -----------------  html----------------------

let patch = init([classModule, eventListenersModule]);

// 排序block
let sortlist = [h('label.sort-label', 'Sort by:')];
data.sortPoint.forEach((item) => {
  sortlist.push(h('a.sort-btn', {
    on: {
      click: sort.bind(null, item)
    }
  }, item
  ))
})

sortlist.push(h('a.add', {
  on: {
    click: add
  }
}, 'Add'))

let sortNode = h('div.sort', sortlist);

// 列表block
function listBlock() {
  let movieslist = [];
  data.list.forEach((item, index) => {
    movieslist.push(h('li.movies-list-item', [
      h('span.rank', item.Rank),
      h('span.title', item.Title),
      h('span.description', item.Description),
      h('a', {
        on: {
          click: deleteMovie.bind(null, index)
        }
      }, '×')
    ]))
  })
  return h('ul.movies-list-box', movieslist);
}

// 主容器block

let oldNode = document.querySelector('#app');

function render() {
  let vnode = h('div.container', {}, [
    h('h1.title', 'TOP 10 movies'),
    sortNode,
    listBlock()
  ])
  oldNode = patch(oldNode, vnode);
}

render();

// ---------------------点击事件------------------------

function sort(sort) {
  data.list.sort((a, b) => {
    let aa = a[sort];
    let bb = b[sort];
    if (aa<bb) {
      return -1;
    } else if (aa==bb) {
      return 0;
    } else {
      return 1;
    }
  })
  render();
}

function deleteMovie(index) {
  data.list.splice(index, 1);

  render();
}

function add() {

}


