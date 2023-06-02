/* eslint-disable prettier/prettier */

import { DeleteRocket, GetRocket, SubmitRocket, UpdateRocket } from "../service/RocketService";

// Mock the fetch API for testing purposes
global.fetch = jest.fn(() =>
    Promise.resolve({
        ok: true,
        json: () => Promise.resolve({}),
    })
);
describe('Service functions', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('GetRocket should make a GET request to the correct URL', async () => {
        await GetRocket();
        expect(fetch as jest.Mock).toHaveBeenCalledWith(
            'https://rocket-project.vercel.app/rocket'
        );
    });

    test('SubmitRocket should make a POST request to the correct URL with the provided data', async () => {
        const formData = { id: 1, name: 'Rocket' };
        await SubmitRocket(formData);
        expect(fetch as jest.Mock).toHaveBeenCalledWith(
            'https://rocket-project.vercel.app/rocket',
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            }
        );
    });

    test('UpdateRocket should make a PUT request to the correct URL with the provided data', async () => {
        const id = 1;
        const formData = { name: 'Updated Rocket' };
        await UpdateRocket(id, formData);
        expect(fetch as jest.Mock).toHaveBeenCalledWith(
            'https://rocket-project.vercel.app/rocket/1',
            {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            }
        );
    });

    test('DeleteRocket should make a DELETE request to the correct URL', async () => {
        const id = 1;
        await DeleteRocket(id);
        expect(fetch as jest.Mock).toHaveBeenCalledWith(
            'https://rocket-project.vercel.app/rocket/1',
            {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
            }
        );
    });
});