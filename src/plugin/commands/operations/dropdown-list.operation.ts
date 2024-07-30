import type { ICommand, IAccessor } from '@univerjs/core';
import { CommandType } from '@univerjs/core';

export const DropdownListFirstItemOperation: ICommand = {
    id: 'custom-menu.operation.dropdown-list-first-item',
    type: CommandType.OPERATION,
    handler: async (accessor: IAccessor) => {
        alert('Dropdown list first item operation');
        return true;
    },
};

export const DropdownListSecondItemOperation: ICommand = {
    id: 'custom-menu.operation.dropdown-list-second-item',
    type: CommandType.OPERATION,
    handler: async (accessor: IAccessor) => {
        alert('Dropdown list second item operation');
        return true;
    },
};