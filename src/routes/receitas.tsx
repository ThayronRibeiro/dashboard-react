import { Input } from "components/common/Input";
import { Layout } from "components/common/Layout";
import { useNavigate } from "react-router-dom";
import {
  FiveColumnInputs,
  FormArea,
  ThreeColumnInputs,
  ThreeColumnInputsFlex,
  TwoColumnInputs,
} from "styles/Form";
import { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { FormContainerArea } from "styles/ReceitaForm";
import { useClientService } from "app/services";
import { Client } from "app/models/clients";
import { Select } from "components/common/Select";
import { useReceitaService } from "app/services/receita.service";
import alertify from "alertifyjs";
import { Receita } from "app/models/receitas";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export const Receitas: React.FC = () => {
  alertify.set("notifier", "position", "top-right");
  const service = useReceitaService();

  const [descLente, setDescLente] = useState("");
  const [corLente, setCorLente] = useState("");
  const [obsLente, setObsLente] = useState("");

  const [longeOdEsf, setLongeOdEsf] = useState("");
  const [longeOdCil, setLongeOdCil] = useState("");
  const [longeOdEixo, setLongeOdEixo] = useState("");
  const [longeOdDnp, setLongeOdDnp] = useState("");
  const [longeOdDp, setLongeOdDp] = useState("");

  const [longeOeEsf, setLongeOeEsf] = useState("");
  const [longeOeCil, setLongeOeCil] = useState("");
  const [longeOeEixo, setLongeOeEixo] = useState("");
  const [longeOeDnp, setLongeOeDnp] = useState("");
  const [longeOeDp, setLongeOeDp] = useState("");

  const [pertoOdEsf, setPertoOdEsf] = useState("");
  const [pertoOdCil, setPertoOdCil] = useState("");
  const [pertoOdEixo, setPertoOdEixo] = useState("");
  const [pertoOdDnp, setPertoOdDnp] = useState("");
  const [pertoOdDp, setPertoOdDp] = useState("");

  const [pertoOeEsf, setPertoOeEsf] = useState("");
  const [pertoOeCil, setPertoOeCil] = useState("");
  const [pertoOeEixo, setPertoOeEixo] = useState("");
  const [pertoOeDnp, setPertoOeDnp] = useState("");
  const [pertoOeDp, setPertoOeDp] = useState("");

  const [resina, setResina] = useState<boolean>(false);
  const [cristal, setCristal] = useState<boolean>(false);
  const [highLife, setHighLife] = useState<boolean>(false);

  const [dataEntrega, setDataEntrega] = useState<string>();

  const nav = useNavigate();

  const schema = yup
    .object()
    .shape({
      dataEntrega: yup.date(),
      resinaCheck: yup.boolean(),
      cristalCheck: yup.boolean(),
      highLifeCheck: yup.boolean(),
      descLente: yup.string().required(),
      corLente: yup.string().required(),
      obsLente: yup.string(),
      longeOdEsf: yup.number().required(),
      longeOdCil: yup.number().required(),
      longeOdEixo: yup.number().required(),
      longeOdDnp: yup.number().required(),
      longeOdDp: yup.number().required(),
      longeOeEsf: yup.number().required(),
      longeOeCil: yup.number().required(),
      longeOeEixo: yup.number().required(),
      longeOeDnp: yup.number().required(),
      longeOeDp: yup.number().required(),
      pertoOdEsf: yup.number().required(),
      pertoOdCil: yup.number().required(),
      pertoOdEixo: yup.number().required(),
      pertoOdDnp: yup.number().required(),
      pertoOdDp: yup.number().required(),
      pertoOeEsf: yup.number().required(),
      pertoOeCil: yup.number().required(),
      pertoOeEixo: yup.number().required(),
      pertoOeDnp: yup.number().required(),
      pertoOeDp: yup.number().required(),
    })
    .required();

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onInvalid = (errors) => console.error(errors);

  const onSubmit = () => {
    const receita: Receita = {
      descricaoLente: descLente,
      corLente,
      observacao: obsLente,
      longeOdEsf,
      longeOdCil,
      longeOdEixo,
      longeOdDnp,
      longeOdDp,
      longeOeEsf,
      longeOeCil,
      longeOeEixo,
      longeOeDnp,
      longeOeDp,
      pertoOdEsf,
      pertoOdCil,
      pertoOdEixo,
      pertoOdDnp,
      pertoOdDp,
      pertoOeEsf,
      pertoOeCil,
      pertoOeEixo,
      pertoOeDnp,
      pertoOeDp,
      resina: resina,
      cristal,
      highLife,
      dataEntrega,
    };

    console.log(receita);

    service
      .salvar(receita)
      .then(() => {
        alertify.success("Receita cadastrada!");
        nav("/");
      })
      .catch(() => {
        alertify.error("Receita não cadastrada!");
      });
  };

  return (
    <>
      <Layout title="Receitas">
        <FormArea>
          <form onSubmit={handleSubmit(onSubmit, onInvalid)}>
            <FormContainerArea>
              <div>
                <ThreeColumnInputs>
                  <div>
                    <Input
                      label="Data de Entrega"
                      type="date"
                      id="dataEntrega"
                      value={dataEntrega}
                      register={register}
                      onChange={setDataEntrega}
                    />
                    {errors.dataEntrega && !dataEntrega && (
                      <p>Campo obrigatório!</p>
                    )}
                  </div>
                  <div></div>
                  <div></div>
                </ThreeColumnInputs>

                {/* <Controller
                  control={control}
                  rules={{ required: true }}
                  name="selectClient"
                  render={({ field }) => <Select />}
                />
                {errors.selectClient && <p>Campo obrigatório!</p>} */}
                <Select />

                <h3>Informações da lente</h3>

                <ThreeColumnInputsFlex>
                  <div>
                    <Input
                      label="Resina"
                      type="checkbox"
                      id="resinaCheck"
                      checked={resina}
                      register={register}
                      onChange={() => {
                        setResina(!resina);
                      }}
                    />
                  </div>
                  <div>
                    <Input
                      label="Cristal"
                      type="checkbox"
                      id="cristalCheck"
                      checked={cristal}
                      register={register}
                      onChange={() => {
                        setCristal(!cristal);
                      }}
                    />
                  </div>
                  <div>
                    <Input
                      label="High Life"
                      type="checkbox"
                      id="highLifeCheck"
                      checked={highLife}
                      register={register}
                      onChange={() => {
                        setHighLife(!highLife);
                      }}
                    />
                  </div>
                </ThreeColumnInputsFlex>
                <div>
                  <Input
                    id="descLente"
                    label="Descrição"
                    value={descLente}
                    errorsInput={errors.descLente && !descLente}
                    register={register}
                    onChange={setDescLente}
                  />

                  {errors.descLente && !descLente && <p>Campo obrigatório!</p>}
                  <Input
                    id="corLente"
                    label="Cor"
                    value={corLente}
                    errorsInput={errors.corLente && !corLente}
                    register={register}
                    onChange={setCorLente}
                  />
                  {errors.corLente && !corLente && <p>Campo obrigatório!</p>}
                  <Input
                    id="obsLente"
                    label="Observação"
                    type="textarea"
                    value={obsLente}
                    errorsInput={errors.obsLente && !obsLente}
                    register={register}
                    onChange={setObsLente}
                  />
                  {errors.obsLente && !obsLente && <p>Campo obrigatório!</p>}
                </div>
              </div>
              <div>
                <h4>Longe</h4>
                <h5>Olho direito</h5>
                <FiveColumnInputs>
                  <div>
                    <Input
                      id="longeOdEsf"
                      label="Esf."
                      value={longeOdEsf}
                      name="longeOdEsf"
                      onChange={setLongeOdEsf}
                      register={register}
                      errorsInput={errors.longeOdEsf && !longeOdEsf}
                    />
                    {errors.longeOdEsf && !longeOdEsf && (
                      <p>Campo obrigatório!</p>
                    )}
                  </div>
                  <div>
                    <Input
                      id="longeOdCil"
                      label="Cil."
                      value={longeOdCil}
                      register={register}
                      onChange={setLongeOdCil}
                      errorsInput={errors.longeOdCil && !longeOdCil}
                    />
                    {errors.longeOdCil && !longeOdCil && (
                      <p>Campo obrigatório!</p>
                    )}
                  </div>
                  <div>
                    <Input
                      id="longeOdEixo"
                      label="Eixo"
                      value={longeOdEixo}
                      register={register}
                      onChange={setLongeOdEixo}
                      errorsInput={errors.longeOdEixo && !longeOdEixo}
                    />
                    {errors.longeOdEixo && !longeOdEixo && (
                      <p>Campo obrigatório!</p>
                    )}
                  </div>
                  <div>
                    <Input
                      id="longeOdDnp"
                      label="Dnp."
                      value={longeOdDnp}
                      register={register}
                      onChange={setLongeOdDnp}
                      errorsInput={errors.longeOdDnp && !longeOdDnp}
                    />
                    {errors.longeOdDnp && !longeOdDnp && (
                      <p>Campo obrigatório!</p>
                    )}
                  </div>
                  <div>
                    <Input
                      id="longeOdDp"
                      label="Dp."
                      value={longeOdDp}
                      register={register}
                      onChange={setLongeOdDp}
                      errorsInput={errors.longeOdDp && !longeOdDp}
                    />
                    {errors.longeOdDp && !longeOdDp && (
                      <p>Campo obrigatório!</p>
                    )}
                  </div>
                </FiveColumnInputs>
                <h5>Olho esquerdo</h5>
                <FiveColumnInputs>
                  <div>
                    <Input
                      id="longeOeEsf"
                      label="Esf."
                      value={longeOeEsf}
                      register={register}
                      onChange={setLongeOeEsf}
                      errorsInput={errors.longeOeEsf && !longeOeEsf}
                    />
                    {errors.longeOeEsf && !longeOeEsf && (
                      <p>Campo obrigatório!</p>
                    )}
                  </div>

                  <div>
                    <Input
                      id="longeOeCil"
                      label="Cil."
                      value={longeOeCil}
                      register={register}
                      onChange={setLongeOeCil}
                      errorsInput={errors.longeOeCil && !longeOeCil}
                    />
                    {errors.longeOeCil && !longeOeCil && (
                      <p>Campo obrigatório!</p>
                    )}
                  </div>
                  <div>
                    <Input
                      id="longeOeEixo"
                      label="Eixo"
                      value={longeOeEixo}
                      register={register}
                      onChange={setLongeOeEixo}
                      errorsInput={errors.longeOeEixo && !longeOeEixo}
                    />
                    {errors.longeOeEixo && !longeOeEixo && (
                      <p>Campo obrigatório!</p>
                    )}
                  </div>
                  <div>
                    <Input
                      id="longeOeDnp"
                      label="Dnp."
                      value={longeOeDnp}
                      register={register}
                      onChange={setLongeOeDnp}
                      errorsInput={errors.longeOeDnp && !longeOeDnp}
                    />
                    {errors.longeOeDnp && !longeOeDnp && (
                      <p>Campo obrigatório!</p>
                    )}
                  </div>
                  <div>
                    <Input
                      id="longeOeDp"
                      label="Dp."
                      value={longeOeDp}
                      register={register}
                      onChange={setLongeOeDp}
                      errorsInput={errors.longeOeDp && !longeOeDp}
                    />
                    {errors.longeOeDp && !longeOeDp && (
                      <p>Campo obrigatório!</p>
                    )}
                  </div>
                </FiveColumnInputs>
                <h4>Perto</h4>
                <h5>Olho direito</h5>
                <FiveColumnInputs>
                  <div>
                    <Input
                      id="pertoOdEsf"
                      label="Esf."
                      value={pertoOdEsf}
                      register={register}
                      onChange={setPertoOdEsf}
                      errorsInput={errors.pertoOdEsf && !pertoOdEsf}
                    />
                    {errors.pertoOdEsf && !pertoOdEsf && (
                      <p>Campo obrigatório!</p>
                    )}
                  </div>
                  <div>
                    <Input
                      id="pertoOdCil"
                      label="Cil."
                      value={pertoOdCil}
                      register={register}
                      onChange={setPertoOdCil}
                      errorsInput={errors.pertoOdCil && !pertoOdCil}
                    />
                    {errors.pertoOdCil && !pertoOdCil && (
                      <p>Campo obrigatório!</p>
                    )}
                  </div>
                  <div>
                    <Input
                      id="pertoOdEixo"
                      label="Eixo"
                      value={pertoOdEixo}
                      register={register}
                      onChange={setPertoOdEixo}
                      errorsInput={errors.pertoOdEixo && !pertoOdEixo}
                    />
                    {errors.pertoOdEixo && !pertoOdEixo && (
                      <p>Campo obrigatório!</p>
                    )}
                  </div>
                  <div>
                    <Input
                      id="pertoOdDnp"
                      label="Dnp."
                      value={pertoOdDnp}
                      register={register}
                      onChange={setPertoOdDnp}
                      errorsInput={errors.pertoOdDnp && !pertoOdDnp}
                    />
                    {errors.pertoOdDnp && !pertoOdDnp && (
                      <p>Campo obrigatório!</p>
                    )}
                  </div>
                  <div>
                    <Input
                      id="pertoOdDp"
                      label="Dp."
                      value={pertoOdDp}
                      register={register}
                      onChange={setPertoOdDp}
                      errorsInput={errors.pertoOdDp && !pertoOdDp}
                    />
                    {errors.pertoOdDp && !pertoOdDp && (
                      <p>Campo obrigatório!</p>
                    )}
                  </div>
                </FiveColumnInputs>
                <h5>Olho esquerdo</h5>
                <FiveColumnInputs>
                  <div>
                    <Input
                      id="pertoOeEsf"
                      label="Esf."
                      value={pertoOeEsf}
                      register={register}
                      onChange={setPertoOeEsf}
                      errorsInput={errors.pertoOeEsf && !pertoOeEsf}
                    />
                    {errors.pertoOeEsf && !pertoOeEsf && (
                      <p>Campo obrigatório!</p>
                    )}
                  </div>

                  <div>
                    <Input
                      id="pertoOeCil"
                      label="Cil."
                      value={pertoOeCil}
                      register={register}
                      onChange={setPertoOeCil}
                      errorsInput={errors.pertoOeCil && !pertoOeCil}
                    />
                    {errors.pertoOeCil && !pertoOeCil && (
                      <p>Campo obrigatório!</p>
                    )}
                  </div>
                  <div>
                    <Input
                      id="pertoOeEixo"
                      label="Eixo"
                      value={pertoOeEixo}
                      register={register}
                      onChange={setPertoOeEixo}
                      errorsInput={errors.pertoOeEixo && !pertoOeEixo}
                    />
                    {errors.pertoOeEixo && !pertoOeEixo && (
                      <p>Campo obrigatório!</p>
                    )}
                  </div>
                  <div>
                    <Input
                      id="pertoOeDnp"
                      label="Dnp."
                      value={pertoOeDnp}
                      register={register}
                      onChange={setPertoOeDnp}
                      errorsInput={errors.pertoOeDnp && !pertoOeDnp}
                    />
                    {errors.pertoOeDnp && !pertoOeDnp && (
                      <p>Campo obrigatório!</p>
                    )}
                  </div>
                  <div>
                    <Input
                      id="pertoOeDp"
                      label="Dp."
                      value={pertoOeDp}
                      register={register}
                      onChange={setPertoOeDp}
                      errorsInput={errors.pertoOeDp && !pertoOeDp}
                    />
                    {errors.pertoOeDp && !pertoOeDp && (
                      <p>Campo obrigatório!</p>
                    )}
                  </div>
                </FiveColumnInputs>
                {/* <input value="Salvar" type="submit" id="inputReceita" /> */}
              </div>
            </FormContainerArea>
            <input value="Salvar" type="submit" id="inputReceita" />
            <input
              type="button"
              onClick={() => {
                reset();
              }}
              value="Limpar"
            />
          </form>
        </FormArea>
      </Layout>
    </>
  );
};
