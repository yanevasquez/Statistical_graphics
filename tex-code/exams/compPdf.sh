#!/bin/bash

# Nome do script: compPdf.sh  					
#
# Descrição:  Compila os arquivos .tex passados por parâmetro 
#	      e remove os que possuem extensão log e aux, na sequência 
#	      redireciona o arquivo compilado para um diretório de pdfs.
#
# Autor(a): Yane Lisset B. Vasquez <yanelisset4@gmail.com>    						       
#
# Última atualização: 24/04/2019


dir="./PDFs"

for i in $* ; do 
	pdflatex $i;

	for j in *.aux *.log; do 
		rm $j
	done
done

clear

mkdir -p "${dir}" 2> /dev/null

mv $(ls | grep .pdf) $dir;

