import { render, screen, within } from "@testing-library/react";
import List from ".";
import { expect, test } from 'vitest';

const testUsers =[


    {
        name: 'Duygu',
        mail: 'duygu60@gmail.com',
        age: 25,
       },
       {
        name: 'Metin',
        mail: 'metin30@gmail.com',
        age: 30,
       },
];

it('gönderilen her kullanıcı için ekrana satır basılır' ,() =>{
    render(<List users={testUsers} />);

const body = screen.getByTestId("table-body");
const rows= within(body).getAllByRole('row');

expect(rows).toHaveLength(testUsers.length);

});

it('her bir kullanıcı için isim email yaş hücreleri bulunur', () =>{
    render(<List users={testUsers} />);

    for (const user of testUsers){

    screen.getByRole('cell', { name: user.name });
    screen.getByRole('cell', { name: user.mail });
    screen.getByRole('cell', { name: user.age });
    };
});

