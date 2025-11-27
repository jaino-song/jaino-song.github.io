import { User } from "@/backend/domain/entities/User";

export interface UserPersistence {
    id: string;
    email: string;
    name: string;
    password_hash: string;
    created_at: string | null;
}

export class UserMapper {
    static toDomain(raw: UserPersistence): User {
        return {
            id: raw.id,
            email: raw.email,
            name: raw.name,
            password_hash: raw.password_hash,
            created_at: raw.created_at ? new Date(raw.created_at) : null,
        };
    }

    static toPersistence(user: User): UserPersistence {
        return {
            id: user.id,
            email: user.email,
            name: user.name,
            password_hash: user.password_hash,
            created_at: user.created_at?.toISOString() ?? null,
        };
    }
}
