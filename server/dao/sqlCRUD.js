// 书籍相关的 CRUD 操作
const book = {

    queryById: 'select * from books where bkid=?',
    queryAll: 'select * from books',
    queryBookBySkey: 'select count(*) as buyCount from orders left join users on users.uid = orders.uid where users.skey=? and orders.bkid=? ',
    getPrice: 'select bkprice from books where bkid=?'
};

// 用户相关的CRUD操作
const user = {
    queryById: 'select * from users where uid=?',
    add: 'insert into users set ?',
    hasUser: 'select count(*) as userCount,ubalance from users where uid=? group by ubalance',
    update: 'update users set ? where uid=?',
    getBoughtBooks: 'select books.bkid,bkname,bkfile,bkcover from books right join orders on books.bkid=orders.bkid right join users on users.uid=orders.uid where users.skey=?',
    getBalance: 'select ubalance,uid from users where skey=?',
    reduceBalance: 'update users set ubalance=? where uid=?',
    getId: 'select users.uid,users.uname,comment.ctime, comment.ccontent, books.bkname, books.bkauthor, books.bkfile, books.bkpublisher, books.bkcover from users left join comment on comment.uid=users.uid LEFT JOIN books on books.bkid = comment.bkid where users.skey=? and comment.ccontent=?'
};

// 用户评论相关操作
const comment = {
    queryComments: 'select * from comment where bkid=? order by ctime desc limit 0,100',
    queryById: 'select * from comment where bkid=? order by ctime desc',
    addComment: 'insert into comment (uid, uname, uavatar, bkid, bkname, ccontent) select uid, uname, uavatar, ? ,(select bkname from books where bkid=?), ? from users where users.skey=?'
};

// 订单相关的操作
const order = {
    queryById: 'select * from orders where bkid = ?',
    buyBook: 'insert into orders (uid, oprice, bkid) VALUES (?,?,?)'
};

// 接口凭据相关的操作
const access = {
    queryToken: 'select token from access'
};

module.exports = {
    book,
    user,
    comment,
    order,
    access
}