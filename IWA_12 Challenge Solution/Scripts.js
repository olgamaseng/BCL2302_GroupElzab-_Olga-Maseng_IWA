// scripts.js

/*const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

// Edit below line 

const book1 = document.getElementById('book1');
status1 = book1.querySelector('#status');
reserve1 = book1.querySelector('#reserve');
checkout1 = book1.querySelector('#checkout');
checkin1 = book1.querySelector('#checkin');

const book2 = document.getElementById('book2');
status2 = book2.querySelector('#status');
reserve2 = book2.querySelector('#reserve');
checkout2 = book2.querySelector('#checkout');
checkin2 = book2.querySelector('#checkin')

const book3 = document.getElementById('book3');
status3 = book3.querySelector('#status')
reserve3 = book3.querySelector('#reserve')
checkout3 = book3.querySelector('#checkout')
checkin3 = book3.querySelector('#checkin')

checkin1.color = none
status1.style.color = STATUS_MAP.overdue.color ? 'black' : 'gray'
reserve1 = STATUS_MAP.canReserve ? 'true' : 'false'
checkout1 = STATUS_MAP.canCheckout ? 'true' : 'false'
checkin1 = STATUS_MAP.canCheckIn ? 'true' : 'false'

checkin2.color = none
status2.style.color = STATUS_MAP.reserved.color ? 'black' : 'gray'
reserve2 = STATUS_MAP.canReserve ? 'enabled' : 'disabled'
checkout2 = STATUS_MAP.canCheckout ? 'enabled' : 'disabled'
checkin2 = STATUS_MAP.canCheckIn ? 'enabled' : 'disabled'

checkin3.color = none
status3.style.color = STATUS_MAP.shelf.color ? 'black' : 'gray'
reserve3 = STATUS_MAP.shelf.canReserve ? 'enabled' : 'disabled'
checkout3 = STATUS_MAP.shelf.canCheckout ? 'enabled' : 'disabled'
checkin3 = STATUS_MAP.shelf.canCheckIn ? 'enabled' : 'disabled'*/

const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}
/*
* Edit below line
*________________________________________________________________________________________________________________________________________________
*/
const book1 = {
    status: document.querySelector('#book1 .status'),
    reserve: document.querySelector('#book1 .reserve'),
    checkout: document.querySelector('#book1 .checkout'),
    checkin: document.querySelector('#book1 .checkin')
  }
  const book2 = {
    status: document.querySelector('#book2 .status'),
    reserve: document.querySelector('#book2 .reserve'),
    checkout: document.querySelector('#book2 .checkout'),
    checkin: document.querySelector('#book2 .checkin')
  }
  const book3 = {
    status: document.querySelector('#book3 .status'),
    reserve: document.querySelector('#book3 .reserve'),
    checkout: document.querySelector('#book3 .checkout'),
    checkin: document.querySelector('#book3 .checkin')
  }
  book1.checkin.style.filter = 'grayscale(100%)';
  book1.status.style.color = STATUS_MAP.overdue.color;
  book1.reserve.disabled = !STATUS_MAP.overdue.canReserve;
  book1.checkout.disabled = !STATUS_MAP.overdue.canCheckout;
  book1.checkin.disabled = !STATUS_MAP.overdue.canCheckIn;
  book2.checkin.style.filter = 'grayscale(100%)';
  book2.status.style.color = STATUS_MAP.reserved.color;
  book2.reserve.disabled = !STATUS_MAP.reserved.canReserve;
  book2.checkout.disabled = !STATUS_MAP.reserved.canCheckout;
  book2.checkin.disabled = !STATUS_MAP.reserved.canCheckIn;
  book3.checkin.style.filter = 'grayscale(100%)';
  book3.status.style.color = STATUS_MAP.shelf.color;
  book3.reserve.disabled = !STATUS_MAP.shelf.canReserve;
  book3.checkout.disabled = !STATUS_MAP.shelf.canCheckout;
  book3.checkin.disabled = !STATUS_MAP.shelf.canCheckIn;