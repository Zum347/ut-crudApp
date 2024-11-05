import { render } from "@testing-library/react";
import Form from '.';


test('formu gönderince "addUser parametrelerle çalışıyor mu?"', async () => {
    const mockFn =vi.Fn();
    const user = userEvent.setup();
    render(<Form addUser={mockFn} />);

    const nameInp = screen.getByLabelText('İsim');
    const mailInp = screen.getByLabelText('Email');
    const ageInp = screen.getByPlaceholderText('ör:21');
    const sendBtn = screen.getByRole('button');


   await user.click(nameInp);
   await user.keyboard('fırat');
   await user.type(mailInp, 'firat@gmail.com');
   await user.type(ageInp, '59');

   await user.click(sendBtn);
   expect(mockFn).toHaveBeenCalledWith({
    name: 'fırat',
    mail: 'firat@gmail.com',
    age: '59',
   });
   expect(nameInp.value).toBe('');
   expect(mailInp.value).toBe('');
   expect(ageInp.value).toBe('');
});