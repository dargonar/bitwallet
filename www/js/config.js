angular.module('bit_wallet.config', [])
.constant('DB_CONFIG', {
    name: 'wallet.db',
    version : 1,
    tables: [
        {
            name: 'master_key',
            columns: [
                {name : 'id',     type   : 'integer primary key'},
                {name : 'key',    type   : 'text'},
                {name : 'deriv',  type   : 'integer'}
            ]
        },
        {
            name: 'address',
            columns: [
                {name : 'id',         type   : 'integer primary key'},
                {name : 'deriv',      type   : 'integer'},
                {name : 'address',    type   : 'text'},
                {name : 'label',      type   : 'text'},
                {name : 'pubkey',     type   : 'text'},
                {name : 'privkey',    type   : 'text'},
                {name : 'created_at', type   : 'integer'},
                {name : 'is_default', type   : 'integer'}
            ]
        },
        {
            name: 'address_book',
            columns: [
                {name : 'id',          type   : 'integer primary key'},
                {name : 'address',     type   : 'text unique'},
                {name : 'name',        type   : 'text'},
                {name : 'is_favorite', type   : 'integer'},
            ]
        }
    ]
});

