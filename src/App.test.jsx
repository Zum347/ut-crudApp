import { render } from '@testing-library/react';
import { expect } from 'vitest';

it('Uygulama doğru şekilde çalışıyor mu?' , async() => {
const user =userEvent();
render(<App />);

const nameInp = screen.getByLabelText('İsim');
const mailInp = screen.getByLabelText('Email');
const ageInp = screen.getByLabelText('Age');
const sendBtn = screen.getByRole('button',{
    name: 'Kullanıcı Ekle',
});

await user.type(nameInp, 'Veli');
await user.type(mailInp, 'veli@gmail.com');
await user.type(ageInp, 24);

await user.click(sendBtn);

screen.getByRole('cell' , { name: 'Veli'});
screen.getByRole('cell', { name: 'veli@gamil.com'});
screen.getByRole('cell' , { name: '24'});
});