import { UserRepository } from "@/backend/domain/repositories/UserRepository";
import { User } from "@/backend/domain/entities/User";
import { supabase } from "@/backend/utils/SbClient";
import { UserMapper, UserPersistence } from "@/backend/infrastructure/mappers/UserMapper";

export class SbUserRepository implements UserRepository {
    async create(user: User): Promise<User> {
        const { data, error } = await supabase.from("users").insert(UserMapper.toPersistence(user)).select().single();
        if (error) {
            throw new Error(error.message);
        }
        return UserMapper.toDomain(data as unknown as UserPersistence);
    }
    async findById(id: string): Promise<User | null> {
        const { data, error } = await supabase.from("users").select("*").eq("id", id).single();
        if (error) {
            throw new Error(error.message);
        }
        return UserMapper.toDomain(data as unknown as UserPersistence);
    }
    async update(user: User): Promise<User> {
        const { data, error } = await supabase.from("users").update(UserMapper.toPersistence(user)).eq("id", user.id).select().single();
        if (error) {
            throw new Error(error.message);
        }
        return UserMapper.toDomain(data as unknown as UserPersistence);
    }
    async delete(id: string): Promise<void> {
        const { error } = await supabase.from("users").delete().eq("id", id);
        if (error) {
            throw new Error(error.message);
        }
    }
    async findAll(): Promise<User[]> {
        const { data, error } = await supabase.from("users").select("*");
        if (error) {
            throw new Error(error.message);
        }
        return data.map((item: unknown) => UserMapper.toDomain(item as UserPersistence));
    }
}