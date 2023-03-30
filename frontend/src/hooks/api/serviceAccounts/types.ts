import { Workspace } from '../workspace/types';

export type ServiceAccount = {
    _id: string;
    name: string;
    organization: string;
    user: string;
    publicKey: string;
    expiresAt: string;
}

export type CreateServiceAccountDTO = {
    name: string;
    organizationId: string;
    publicKey: string;
    expiresIn: number;
}

export type CreateServiceAccountRes = {
    serviceAccount: ServiceAccount;
    serviceAccountAccessKey: string;
}

export type RenameServiceAccountDTO = {
    serviceAccountId: string;
    name: string;
}

export type ServiceAccountWorkspacePermission = {
    _id: string;
    serviceAccount: string;
    workspace: Workspace;
    environment: string;
    canRead: boolean;
    canWrite: boolean;
    canUpdate: boolean;
    canDelete: boolean;
}

export type CreateServiceAccountWorkspacePermissionDTO = {
    serviceAccountId: string;
    workspaceId: string;
    environment: string;
    canRead: boolean;
    canWrite: boolean;
    canUpdate: boolean;
    canDelete: boolean;
    encryptedKey: string;
    nonce: string;
}

export type DeleteServiceAccountWorkspacePermissionDTO = {
    serviceAccountId: string;
    serviceAccountWorkspacePermissionId: string;
}