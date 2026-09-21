-- Permitir que usuários autenticados excluam registros de motoristas.
-- O botão de lixeira do sistema só aparece para registros com status ERRO.
drop policy if exists "Usuários autenticados podem excluir motoristas" on public.motoristas;

create policy "Usuários autenticados podem excluir motoristas"
on public.motoristas
for delete
to authenticated
using (true);
